/**
*Made by CandleMamel
*이 소스는 GPL 3.0 라이센스를 사용합니다. 무단 복제 및 2차 유포를 금합니다.
*아래 소스는 파일 스트림을 기반으로 사용합니다. 1달 경과시 파일이 많이 생성되기에 폴더를 찾아 1달에 한번씩 지우는걸 추천합니다. ( 파일 자체 용량은 적음 )
*이 소스는 메신저봇R에서 정상작동합니다. 채팅 자동 응답봇은 테스트 하지 않았습니다.
*위 안내문을 삭제하지 마세요.
*2023/06/19 정상동작, 변수 오류 없음 확인
*/
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  const Lw = '​'.repeat(500);
  const d = new Date();
  const Nowtimedaymin = d.getFullYear() + '년 ' + (d.getMonth() + 1) + '월 ' + d.getDate() + '일 ' + d.getHours() + '시 ' + d.getMinutes() + '분 ';
  const Nowtimedaysec = d.getFullYear() + '년 ' + (d.getMonth() + 1) + '월 ' + d.getDate() + '일 ' + d.getHours() + '시 ' + d.getMinutes() + '분 ' + d.getSeconds() + '초 ';
  const Nowtimeday = d.getFullYear() + '년 ' + (d.getMonth() + 1) + '월 ' + d.getDate() + '일 ';
  var prefix = "!" // 접두사, [!]ㅊㅊ
  const email = "본인 이메일"; //이메일입니다! 메시지 수정은 바로 밑이에요 :)
  const giftmessage = " \n이 메시지와 1등 연속 출석을 인증할 수 있는 메시지를\n" + email + " 으로 보내주세요!\n확인 여부를 통해 개발자님께서 소정의 상품을 지급합니다!"; // 메시지 수정, 필요 없을시 공백.
  const mybotname = "마시멜로봇";  //본인 봇 이름입니다. 데이터 저장시 본인 봇 이름으로 처리됩니다. 
  const FS = FileStream;
  if (msg == prefix + "출석" || msg == prefix + "ㅊㅊ" || msg == "!출첵") {
    const sendercheck = FS.read("/sdcard/ " + mybotname + "의 출석/출석 유저/" + room + "/" + Nowtimeday + sender + ".txt");
    if (sendercheck == null) {
      FS.append("sdcard/ " + mybotname + "의 출석/" + Nowtimeday + "일자 출석목록", "\n\n𝑨𝒕𝒕𝒆𝒏𝒅𝒂𝒏𝒄𝒆 𝑪𝒐𝒎𝒑𝒍𝒆𝒕𝒆.\n𝑺𝒆𝒏𝒅𝒆𝒓 : " + sender + "\n𝑹𝒐𝒐𝒎 : " + room + "\n𝑨𝒕𝒕𝒆𝒏𝒅𝒂𝒏𝒄𝒆 𝑻𝒊𝒎𝒆 : " + Nowtimedaysec + "\n______________________________________\n\n");
      FS.append("sdcard/ " + mybotname + "의 출석/" + Nowtimeday + "일자 출석목록 " + room, "\n\n𝑨𝒕𝒕𝒆𝒏𝒅𝒂𝒏𝒄𝒆 𝑪𝒐𝒎𝒑𝒍𝒆𝒕𝒆.\n𝑺𝒆𝒏𝒅𝒆𝒓 : " + sender + "\n𝑨𝒕𝒕𝒆𝒏𝒅𝒂𝒏𝒄𝒆 𝑻𝒊𝒎𝒆 : " + Nowtimedaysec + "\n______________________________________\n\n");
      FS.append("/sdcard/ " + mybotname + "의 출석/" + Nowtimeday + "일자 전체순위.txt", "1");
      FS.append("/sdcard/ " + mybotname + "의 출석/" + room + "/" + Nowtimeday + "/" + "일자 순위.txt", "1");
      const read1 = FS.read("/sdcard/ " + mybotname + "의 출석/" + room + "/" + Nowtimeday + "/" + "일자 순위.txt").length;
      const read2 = FS.read("/sdcard/ " + mybotname + "의 출석/" + Nowtimeday + "일자 전체순위.txt").length;
      FS.write("/sdcard/ " + mybotname + "의 출석/출석 유저/" + room + "/" + Nowtimeday + sender + ".txt", "𝑨𝒕𝒕𝒆𝒏𝒅𝒂𝒏𝒄𝒆 𝑪𝒐𝒎𝒑𝒍𝒆𝒕𝒆.\n𝑺𝒆𝒏𝒅𝒆𝒓 : " + sender + "\n𝑹𝒐𝒐𝒎 : " + room + "\n𝑨𝒕𝒕𝒆𝒏𝒅𝒂𝒏𝒄𝒆 𝑻𝒊𝒎𝒆 : " + Nowtimedaysec + "\n______________________________________\n\n");
      FS.write("/sdcard/ " + mybotname + "의 출석/출석 유저/" + room + "/" + Nowtimeday + sender + " checktime.txt", Nowtimedaysec);
      if (FS.read("/sdcard/ " + mybotname + "의 출석/" + Nowtimeday + "일자 전체순위.txt") == "1") {
        const Attendance3 = FS.read("/sdcard/ " + mybotname + "의 출석/연속1등출석자1" + sender + ".txt");
        if (FS.read("/sdcard/ " + mybotname + "의 출석체크/연속1등출석자" + sender + ".txt") == "출출출출출출") {
          replier.reply("🔔 " + Nowtimedaysec + "\n" + sender + "님 출석체크 완료!\n🔰 전체 " + read2 + "등" + " | " + "방 " + read1 + "등\n✨ 연속 출석 : " + Attendance13);
          replier.reply(Nowtimeday + "일자 전체 순위 1등! 축하드립니다. 🥇🥇");
          FS.remove("/sdcard/ " + mybotname + "의 출석체크/연속1등출석자" + sender + ".txt");
          FS.remove("/sdcard/ " + mybotname + "의 출석/연속1등출석자1" + sender + ".txt");
          replier.reply("1주일 연속으로 전체 1위를 달성하셨어요! 축하드려요!\n" + giftmessage);
        } else if (FS.read("/sdcard/ " + mybotname + "의 출석/" + Nowtimeday + "일자 전체순위.txt") == "1") {
          FS.append("/sdcard/ " + mybotname + "의 출석/연속1등출석자1" + sender + ".txt", "✅ ");
          const memo = "출";
          FS.append("/sdcard/ " + mybotname + "의 출석체크/연속1등출석자" + sender + ".txt", memo);
          const Attendance13 = FS.read("/sdcard/ " + mybotname + "의 출석/연속1등출석자1" + sender + ".txt");
          replier.reply("🔔 " + Nowtimedaysec + "\n" + sender + "님 출석체크 완료!\n🔰 전체 " + read2 + "등" + " | " + "방 " + read1 + "등\n✨ 연속 출석 : " + Attendance13);
          replier.reply(Nowtimeday + "일자 전체 순위 1등! 축하드립니다. 🥇🥇");
        }
      } else if (FS.read("/sdcard/ " + mybotname + "의 출석/" + Nowtimeday + "일자 전체순위.txt") == "11") {
        replier.reply("🔔 " + Nowtimedaysec + "\n" + sender + "님 출석체크 완료!\n🔰 전체 " + read2 + "등" + " | " + "방 " + read1 + "등");
        replier.reply(Nowtimeday + "일자 전체 순위 2등! 축하드립니다. 🥈🥈");
        FS.remove("/sdcard/ " + mybotname + "의 출석체크/연속1등출석자" + sender + ".txt");
        FS.remove("/sdcard/ " + mybotname + "의 출석/연속1등출석자1" + sender + ".txt");
      } else if (FS.read("/sdcard/ " + mybotname + "의 출석/" + Nowtimeday + "일자 전체순위.txt") == "111") {
        replier.reply("🔔 " + Nowtimedaysec + "\n" + sender + "님 출석체크 완료!\n🔰 전체 " + read2 + "등" + " | " + "방 " + read1 + "등");
        replier.reply(Nowtimeday + "일자 전체 순위 3등! 축하드립니다. 🥉🥉");
        FS.remove("/sdcard/ " + mybotname + "의 출석체크/연속1등출석자" + sender + ".txt");
        FS.remove("/sdcard/ " + mybotname + "의 출석/연속1등출석자1" + sender + ".txt");
      } else if (msg == prefix + "출석" || msg == prefix + "ㅊㅊ") {
        replier.reply("🔔 " + Nowtimedaysec + "\n" + sender + "님 출석체크 완료!\n🔰 전체 " + read2 + "등" + " | " + "방 " + read1 + "등");
        FS.remove("/sdcard/ " + mybotname + "의 출석체크/연속1등출석자1" + sender + ".txt");
        FS.remove("/sdcard/ " + mybotname + "의 출석/연속1등출석자" + sender + ".txt");
      }
    } else if (msg == prefix + "출석" || msg == prefix + "ㅊㅊ") {
      const alreadycheck = FS.read("/sdcard/ " + mybotname + "의 출석/출석 유저/" + room + "/" + Nowtimeday + sender + " checktime.txt");
      replier.reply(sender + "님은 " + alreadycheck + " 에 이미 출석체크를 완료하셨습니다.");
      replier.reply("어라 기억이 안난다고요 ?" + Lw + "\n\n" + FS.read("/sdcard/ " + mybotname + "의 출석/출석 유저/" + room + "/" + Nowtimeday + sender + ".txt"));
    }
  }
  if (msg == prefix + "출석목록 전체") {
    const Attendance1 = FS.read("sdcard/ " + mybotname + "의 출석/" + Nowtimeday + "일자 출석목록");
    replier.reply("𝑨𝒕𝒕𝒆𝒏𝒅𝒂𝒏𝒄𝒆 𝑳𝒊𝒔𝒕" + Lw + "\n\n" + "𝑨𝒕𝒕𝒆𝒏𝒅𝒂𝒏𝒄𝒆 𝑪𝒐𝒖𝒏𝒕 : " + FS.read("/sdcard/ " + mybotname + "의 출석/" + Nowtimeday + "일자 전체순위.txt").length + "위\n" + Attendance1);
  }
  if (msg == prefix + "출석목록") {
    const Attendance2 = FS.read("sdcard/ " + mybotname + "의 출석/" + Nowtimeday + "일자 출석목록 " + room);
    replier.reply("𝑨𝒕𝒕𝒆𝒏𝒅𝒂𝒏𝒄𝒆 𝑳𝒊𝒔𝒕 // 𝑹𝒐𝒐𝒎 : " + room + Lw + "\n\n𝑨𝒕𝒕𝒆𝒏𝒅𝒂𝒏𝒄𝒆 𝑪𝒐𝒖𝒏𝒕 : " + FS.read("/sdcard/ " + mybotname + "의 출석/" + room + "/" + Nowtimeday + "/" + "일자 순위.txt").length + "위\n" + Attendance2);
  }
  const allcheck = FS.read("/sdcard/ " + mybotname + "의 출석/" + Nowtimeday + "일자 전체순위.txt");
  if (allcheck == null) {
    FS.write("/sdcard/ " + mybotname + "의 출석/" + Nowtimeday + "일자 전체순위.txt", "");
  }
}

// replier.reply("🔔 " + Nowtimedaysec + "\n" + sender + "님 출석체크 완료!\n🔰 전체 " + read2 + "등" + " | " + "방 " + read1 + "등\n✨ 연속 출석 : "+ Attendance3)
//replier.reply("🔔 " + Nowtimedaysec + "\n" + sender + "님 출석체크 완료!\n🔰 전체 " + read2 + "등" + " | " + "방 " + read1 + "등")
