//Para alterar os dados no crachá, basta alterar os dados na variável abaixo 'const linksSocialMedia'

const linksSocialMedia = {
  github: 'VictorPazette',
  youtube: 'rocketseat',
  facebook: 'victorpazette',
  instagram: 'victorpazette',
  twitter: 'rocketseat'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    // Isso é Incrementar no Javascrpit
    // i = i + 1
    // i++
    // uma forma mais curta de fazer a mesma coisa

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

//ARROE FUNCTIONS '=>' sinal de igual com maior
//Ou seja, parece uma flecha
//Utilizada para criar funções anônimas
//uma forma mais rapida de criar funções dentro de JS
