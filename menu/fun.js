const a = '```'
const fun = (prefix, pushname2, groupName, user, name) => {
return `

╭─────≽「 *REGULATION ${name}* 」
┴
┣⊱  ${a}NOME DE USUÁRIO:${a} *${pushname2}*
┣⊱  ${a}NOME DO GRUPO:${a} *${groupName}*
┣⊱  ${a}VERSÃO:${a} *0.0.0*
┣⊱  ${a}USUÁRIO REGISTRADO:${a} *${user.length} User*
┬
╰────────────────────────

╭─────≽「 *FUN MENU* 」
┴
┠≽ *${prefix}truth*
┠≽ *${prefix}dare*
┠≽ *${prefix}readmore*
┠≽ *${prefix}puisiimg*
┠≽ *${prefix}asupan*
┠≽ *${prefix}tebakgambar*
┠≽ *${prefix}caklontong*
┠≽ *${prefix}family100*
┠≽ *${prefix}meme*
┠≽ *${prefix}memeindo*
┠≽ *${prefix}darkjokes*
┠≽ *${prefix}kalkulator 13*12*
┬
╰────────────────────────
`
}
exports.fun = fun
