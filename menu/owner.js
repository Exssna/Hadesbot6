const a = '```'
const ownerrr = (prefix, pushname2, groupName, user, name) => {
return `

╭─────≽「 *REGULATION ${name}* 」
┴
┣⊱  ${a}NOME DE USUÁRIO:${a} *${pushname2}*
┣⊱  ${a}NOME DO GRUPO:${a} *${groupName}*
┣⊱  ${a}VERSÃO:${a} *0.0.0*
┣⊱  ${a}USUÁRIO REGISTRADO:${a} *${user.length} User*
┬
╰────────────────────────

╭────────≽「 *SÓ PROPRIETÁRIO* 」
┴
┠≽ *${prefix}addstatus*
┠≽ *${prefix}addbadword*
┠≽ *${prefix}dellbadword*
┠≽ *${prefix}zalgo*
┠≽ *${prefix}vapor*
┠≽ *${prefix}pitch*
┠≽ *${prefix}addpremium mentioned*
┠≽ *${prefix}dellpremium mentioned*
┠≽ *${prefix}setmemlimit*
┠≽ *${prefix}setlimit*
┠≽ *${prefix}setreply*
┠≽ *${prefix}setprefix*
┠≽ *${prefix}setnamebot*
┠≽ *${prefix}setppbot*
┠≽ *${prefix}setreplyimage*
┠≽ *${prefix}sharelock*
┠≽ *${prefix}chatlist*
┠≽ *${prefix}bc*
┠≽ *${prefix}bcgc*
┠≽ *${prefix}ban*
┠≽ *${prefix}unban*
┠≽ *${prefix}block*
┠≽ *${prefix}unblock*
┠≽ *${prefix}clearall*
┠≽ *${prefix}delete*
┠≽ *${prefix}clone*
┠≽ *${prefix}leave*
┬
╰────────────────────────
`
}
exports.ownerrr = ownerrr
