const a = '```'
const others = (prefix, pushname2, groupName, user, name) => {
return `

╭─────≽「 *REGULAMENTO ${name}* 」
┴
┣⊱  ${a}NOME DE USUÁRIO:${a} *${pushname2}*
┣⊱  ${a}NOME DO GRUPO:${a} *${groupName}*
┣⊱  ${a}VERSÃO:${a} *0.0.0*
┣⊱  ${a}USUÁRIO REGISTRADO:${a} *${user.length} User*
┬
╰────────────────────────

╭─────≽「 *OTHERS MENU* 」
┴
┠≽ *${prefix}randomexo*
┠≽ *${prefix}randombts*
┠≽ *${prefix}blackpink*
┠≽ *${prefix}anjing*
┠≽ *${prefix}kucing*
┠≽ *${prefix}testime*
┠≽ *${prefix}quotes*
┠≽ *${prefix}katabijak*
┠≽ *${prefix}bucin*
┠≽ *${prefix}bacotandilan*
┠≽ *${prefix}pantun*
┠≽ *${prefix}hekerbucin*
┠≽ *${prefix}katailham*
┬
╰────────────────────────

╭─────≽「 *ISLAMIC MENU* 」
┴
┠≽ *${prefix}jadwalsholat Banyuwangi*
┠≽ *${prefix}quran*
┠≽ *${prefix}listsurah*
┠≽ *${prefix}quransurah 1*
┬
╰────────────────────────
`
}
exports.others = others
