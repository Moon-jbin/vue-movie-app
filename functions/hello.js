exports.handler = async function (event, context) {
  return {
    statusCode: 200,   //정상적인 응답
    body: JSON.stringify({
      name: 'Moon',
      age: 95,
      email: 'mjb1209@naver.com'
      
    })
  }
}