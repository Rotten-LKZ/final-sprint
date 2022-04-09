
const config = getConfig()
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

document.getElementById('target').innerHTML = config.target.replace(/\n/g, '<br>')
document.getElementById('chuuni').innerHTML = config.chuuni.replace(/\n/g, '<br>')
document.getElementById('schoolLogo').src = config.school.logo
document.getElementById('schoolName').innerHTML = config.school.name.replace(/\n/g, '<br>')
document.getElementById('schoolWebsite').parentElement.href = config.school.website.url
document.getElementById('schoolWebsite').innerHTML = config.school.website.name.replace(/\n/g, '<br>')
updateTime()

document.getElementById('clear').onclick = function(e) {
  e.preventDefault()
  if (window.localStorage)
    window.localStorage.removeItem('config')
  window.location.reload()
}

function getConfig() {
  if (window.localStorage)
    return JSON.parse(window.localStorage.getItem('config')) || defaultConfig
  else
    alert("Your browser does not support local storage. Please upgrade your browser.")
}

function calcDiffBetweenTwoTime(now, target) {
  const diff = target - now;
  const diffDays = Math.floor(diff / (24 * 3600 * 1000));
  const diffHours = Math.floor((diff / (3600 * 1000)) % 24);
  const diffMinutes = Math.floor((diff / (60 * 1000)) % 60);
  const diffSeconds = Math.floor((diff / 1000) % 60);
  return {
    days: diffDays,
    hours: diffHours,
    minutes: diffMinutes,
    seconds: diffSeconds
  }
}

function updateTime() {
  const diff = calcDiffBetweenTwoTime(Date.now(), config.time)
  days.innerText = addZero(diff.days)
  // days.setAttribute('style', `color: rgb(${calcRed(diff.days)}, 0, 0);`)
  if (diff.days <= 100) 
    days.setAttribute('style', `color: yellow;`)
  else if (diff.days <= 20) 
    days.setAttribute('style', `color: red;`)
  hours.innerText = addZero(diff.hours)
  minutes.innerText = addZero(diff.minutes)
  seconds.innerText = addZero(diff.seconds)
  setTimeout(updateTime, 1000)
}

function addZero(num) {
  return num < 10 ? '0' + num : num
}

function calcRed(days) {
  if (days < 100) {
    return Math.floor(255 * (1 - days / 100))
  }
  return 0
}
