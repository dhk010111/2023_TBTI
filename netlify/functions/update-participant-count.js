// 예시: netlify/functions/update-participant-count.js

// 참여자 수를 메모리에 저장하는 변수 (주의: 서버가 재시작되면 이 값은 리셋됩니다)
let participantCount = 0;

exports.handler = async function(event, context) {
  // 참여자 수를 저장할 곳을 설정합니다. 예를 들어 데이터베이스, 파일 시스템 등
  // 이 예제에서는 단순히 환경 변수를 사용하고 있지만, 이는 영구적이지 않습니다.
  
  // 환경 변수에서 참여자 수를 가져옵니다.
  let participantCount = parseInt(process.env.PARTICIPANT_COUNT || "0");

  // 참여자 수를 증가시킵니다.
  participantCount++;

  // 환경 변수를 업데이트합니다. (이 방법은 임시적이며, 서버 재시작 시 초기화됩니다)
  process.env.PARTICIPANT_COUNT = participantCount.toString();

  // 새로운 참여자 수를 반환합니다.
  return {
    statusCode: 200,
    body: JSON.stringify({ participantCount })
  };
};
