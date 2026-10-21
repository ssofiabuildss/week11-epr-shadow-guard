export const samples = [
 {id:'RC-101',title:'PET packaging documented, recovery unproven',material:'PET',declaredKg:120,source:'Supplier declaration v2 (fictional)',documented:true,downstream:false,recordId:'PET-A61',paper:false,site:'Plant A',recycledClaim:true},
 {id:'RC-102',title:'Potentially repeated PET recovery record',material:'PET',declaredKg:118,source:'Collection note (fictional)',documented:true,downstream:true,recordId:'PET-A61',paper:false,site:'Facility B',recycledClaim:true},
 {id:'RC-103',title:'Collector paper receipt — nondigital evidence',material:'HDPE',declaredKg:42,source:'Paper receipt (fictional; no worker identity)',documented:true,downstream:false,recordId:'HDPE-P19',paper:true,site:'Collection C',recycledClaim:true},
 {id:'RC-104',title:'Conflicting material declarations',material:'PP',actualMaterial:'PET',declaredKg:75,source:'Two contradictory supplier notes (fictional)',documented:true,downstream:false,recordId:'PP-K12',paper:false,site:'Facility B',recycledClaim:true},
 {id:'RC-105',title:'Packaging record only — appropriate limited claim',material:'PET',declaredKg:24,source:'Packaging bill of materials (fictional)',documented:true,downstream:false,recordId:'BOM-501',paper:false,site:'Plant A',recycledClaim:false}
];
export const feed=[23.7,24.3,25.0,24.8,46.2,24.9,25.2]; // intentionally fictional simulated scale sample
export const training=[21.7,22.4,23.1,23.8,24.2,24.7,25.1,25.6,26.2,26.8];
export function mlAnomaly(x, train=training, k=3){if(!Number.isFinite(x))throw new Error('Invalid sensor reading');let neighbors=train.map(t=>Math.abs(x-t)).sort((a,b)=>a-b).slice(0,k);const score=neighbors.reduce((a,b)=>a+b,0)/neighbors.length;return {score:Number(score.toFixed(2)),flag:score>5,method:'3-nearest-neighbor distance on fictional training weights'};}
export const sites={ 'Plant A':{lat:19.43,lng:-99.13},'Facility B':{lat:19.5,lng:-99.1},'Collection C':{lat:19.39,lng:-99.16}}; // fictional positions
export function kmBetween(a,b){const R=6371,toRad=v=>v*Math.PI/180;const dlat=toRad(b.lat-a.lat),dlon=toRad(b.lng-a.lng);const k=Math.sin(dlat/2)**2+Math.cos(toRad(a.lat))*Math.cos(toRad(b.lat))*Math.sin(dlon/2)**2;return Math.round(2*R*Math.asin(Math.sqrt(k))*10)/10;}
export function review(record,records=samples){
 if(!record||typeof record!=='object'||typeof record.id!=='string')throw new Error('Invalid record');
 const reasons=[];
 const duplicates=record.recordId?records.filter(x=>x.recordId===record.recordId&&x.id!==record.id):[];
 if(duplicates.length)reasons.push(`Possible double counting: recovery ID ${record.recordId} also appears in ${duplicates.map(x=>x.id).join(', ')}.`);
 if(!record.documented)reasons.push('Supplier/source documentation missing.');
 if(record.actualMaterial&&record.actualMaterial!==record.material)reasons.push('Material declaration conflicts with supporting evidence.');
 if(record.recycledClaim&&!record.downstream)reasons.push('Independent downstream acceptance evidence missing.');
 if(record.paper)reasons.push('Nondigital paper receipt retained for human review; not automatically rejected.');
 const blocked=record.recycledClaim&&reasons.some(x=>!/Nondigital paper receipt/.test(x));
 return {status:blocked?(record.paper?'BLOCKED · PAPER REVIEW PENDING':'BLOCKED'):record.paper?'PENDING HUMAN REVIEW':record.recycledClaim?'REQUIRES HUMAN VERIFICATION':'PACKAGING ONLY',reasons,blocked,verifiedRecycling:false,claimAllowed:!record.recycledClaim&&record.documented};
}
export function validateNote(note){if(typeof note!=='string')return false;return note.trim().length>=3&&note.length<=240;}
