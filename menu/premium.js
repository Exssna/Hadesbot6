const a = '```'
const menupremium = (prefix, pushname2, groupName, user, name, premium, premi) => {
return `
╭─────≽「 *REGULATION ${name}* 」
┴
┣⊱  ${a}NOME DE USUÁRIO:${a} *${pushname2}*
┣⊱  ${a}NOME DO GRUPO:${a} *${groupName}*
┣⊱  ${a}VERSÃO:${a} *0.0.0*
┣⊱  ${a}USUÁRIO PREMIUM:${a} *${premi}*
┣⊱  ${a}USUÁRIO REGISTRADO:${a} *${user.length} User*
┬
╰────────────────────────

╭───────≽「 *SOMENTE PREMIUM* 」
┴
┠≽ *${prefix}playmp3 menepi*
┠≽ *${prefix}fb link video*
┠≽ *${prefix}snack link snack video*
┠≽ *${prefix}ytmp3 link yt*
┠≽ *${prefix}ytmp4 link yt*
┠≽ *${prefix}tiktok link video tiktok*
┠≽ *${prefix}joox Monolog Pamungkas*
┠≽ *${prefix}smule Link Video Smule*
┬
╰────────────────────────
`
}
exports.menupremium = menupremium
