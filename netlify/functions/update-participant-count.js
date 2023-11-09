// 예시: netlify/functions/update-participant-count.js

// 참여자 수를 메모리에 저장하는 변수 (주의: 서버가 재시작되면 이 값은 리셋됩니다)
let participantCount = 0;

exports.handler = async function(event, context) {
  // POST 요청에만 반응하도록 설정
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
      headers: {
        'Allow': 'POST'
      }
    };
  }

  // 참여자 수를 증가시킵니다.
  participantCount++;

  // 새로운 참여자 수를 반환합니다.
  return {
    statusCode: 200,
    body: JSON.stringify({ participantCount }),
    headers: {
      'Content-Type': 'application/json'
    }
  };
};
