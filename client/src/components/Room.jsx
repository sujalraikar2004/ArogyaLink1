import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
  const { roomId } = useParams();
  const meetingRef = useRef(null);

  useEffect(() => {
    const appID = 832595591;
    const serverSecret = "f541f2d8712b4d14d854889e68fcddae";
    const userID = Date.now().toString();
    const userName = "Dr. Vivek"; // Update with actual user type (doctor/patient)

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      userID,
      userName
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: meetingRef.current,
      sharedLinks: [
        {
          name: 'Copy Consultation Link',
          url: `${window.location.protocol}//${window.location.host}/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference, // 👨‍⚕️ More fitting for telehealth
      },
      showScreenSharingButton: true,
      showPreJoinView: true,
      showRoomTimer: true,
      showLeavingView: true,
    });
  }, [roomId]);

  return (
    <div>
      <h2 className="text-center text-xl font-semibold mt-4">Consultation Room: {roomId}</h2>
      <div ref={meetingRef} style={{ width: '100%', height: '90vh' }} />
    </div>
  );
};

export default Room;
