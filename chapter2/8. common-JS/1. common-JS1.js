// 1. 커먼 JS는 모든 버전의 노드에서 지원하는 일반적인 모듈 패턴

function print (message) { log(message, new Date()) }

function log (message, timestamp) {
  console.log(`${timestamp, toString()}: ${message}`) }

module.exports = {print, log}
