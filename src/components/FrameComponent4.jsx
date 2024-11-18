import React from 'react';

const FrameComponent4 = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto', width: 'fit-content' }}>
      <div style={{ textAlign: 'center', margin: '0 20px' }}>
        <img
          className="download1Icon"
          loading="lazy"
          alt=""
          src="/download-1@2x.png"
          style={{
            position: "relative",
            borderRadius: "var(--radius-400)",
            maxHeight: "100%",
            objectFit: "cover",
            width: "300px",
            height: "150px",
            maxWidth: "100%",
          }}
        />
        <p>¡Cancela tu matrícula!</p>
      </div>
      <div style={{ textAlign: 'center', margin: '0 20px' }}>
        <img
          className="images1Icon"
          loading="lazy"
          alt=""
          src="/images-1@2x.png"
          style={{
            position: "relative",
            borderRadius: "var(--radius-400)",
            maxHeight: "100%",
            objectFit: "cover",
            width: "300px",
            height: "150px",
            maxWidth: "100%",
          }}
        />
        <p>Sigue adelante...</p>
      </div>
      <div style={{ textAlign: 'center', margin: '0 20px' }}>
        <img
          className="images2Icon"
          loading="lazy"
          alt=""
          src="/images-2@2x.png"
          style={{
            position: "relative",
            borderRadius: "var(--radius-400)",
            maxHeight: "100%",
            objectFit: "cover",
            width: "300px",
            height: "150px",
            maxWidth: "100%",
          }}
        />
        <p>¡Alcanza la meta!</p>
      </div>
    </div>
  );
};

export default FrameComponent4;