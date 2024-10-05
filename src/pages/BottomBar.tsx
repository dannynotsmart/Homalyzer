import Link from 'next/link';

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div className="bottom-link" style={{ left: '20%' }}>
        <Link href="/terms">Terms</Link>
      </div>
      <div className="bottom-link" style={{ left: '50%', transform: 'translateX(-50%)' }}>
        <Link href="/privacy">Privacy</Link>
      </div>
      <div className="bottom-link" style={{ right: '20%' }}>
        <Link href="/about">About</Link>
      </div>
      <style jsx>{`
        .bottom-bar {
          position: fixed;
          bottom: 0;
          width: 100%;
          height: 30px;
          background-color: white;
          display: flex;
        }

        .bottom-link {
          position: absolute;
          bottom: 0;
          display: flex;
          align-items: center;
          height: 100%;
        }

        .bottom-link a {
          margin: 0 15px;
          text-decoration: none;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default BottomBar;
