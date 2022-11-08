import React from 'react';


const Payment = () => {
    function onClickPayment() {
        /* 1. 가맹점 식별하기 */
        const { IMP } = window;
        IMP.init('imp35099883');
    
        /* 2. 결제 데이터 정의하기 */
        const data = {
          pg: 'kakaopay',                           // PG사
          pay_method: 'kakaopay',                           // 결제수단
          merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
          amount: 1000,                                 // 결제금액
          name: '아임포트 결제 데이터 분석',                  // 주문명
          buyer_name: '홍길동',                           // 구매자 이름
          buyer_tel: '01012341234',                     // 구매자 전화번호
          buyer_email: 'example@example',               // 구매자 이메일
          buyer_addr: '신사동 661-16',                    // 구매자 주소
          buyer_postcode: '06018',                      // 구매자 우편번호
        };
    
        /* 4. 결제 창 호출하기 */
        IMP.request_pay(data, callback);
      }
    
      /* 3. 콜백 함수 정의하기 */
    function callback(response) {
        const { // success와 error_msg 필수 나머지는 필요한 것 추가
            success,
            error_msg,
            buyer_name,
            merchant_uid,
            name,
            paid_amount,
            pay_method,
        } = response;
    
        if (success) {
            alert('결제 성공');
            console.log(success)
            console.log(buyer_name)
            console.log(merchant_uid)
            console.log(name)
            console.log(paid_amount)
            console.log(pay_method)

        } else {
            alert(`결제 실패: ${error_msg}`);
            // 백엔드 API 호출 테스트    
            fetch('http://localhost:8080/payment', {
                method: 'GET',
                headers: {"Content-Type":"application/json"},
            }).then((response) => console.log(response.json()))
        }
    }
  return (
    <button onClick={onClickPayment}>결제하기</button>
  );
}
export default Payment