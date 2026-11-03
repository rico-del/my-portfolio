const binaryPattern = '0100110101101001011010010011010101100101010011010110100100110101';
const horizontalLanes = [
  { id: 'left-a', direction: 'left', position: '17%', duration: '150s', delay: '-42s' },
  { id: 'left-b', direction: 'left', position: '68%', duration: '178s', delay: '-106s' },
  { id: 'right-a', direction: 'right', position: '35%', duration: '162s', delay: '-91s' },
  { id: 'right-b', direction: 'right', position: '86%', duration: '190s', delay: '-24s' },
];
const verticalLanes = [
  { id: 'up-a', direction: 'up', position: '12%', duration: '145s', delay: '-67s' },
  { id: 'up-b', direction: 'up', position: '79%', duration: '174s', delay: '-121s' },
  { id: 'down-a', direction: 'down', position: '31%', duration: '158s', delay: '-39s' },
  { id: 'down-b', direction: 'down', position: '92%', duration: '184s', delay: '-99s' },
];

function BinaryBackdrop() {
  const row = binaryPattern.repeat(12);
  const column = binaryPattern.repeat(2);

  return (
    <div className="binary-backdrop" aria-hidden="true">
      {horizontalLanes.map((lane) => (
        <div
          className={`binary-lane binary-lane--horizontal binary-lane--${lane.direction}`}
          key={lane.id}
          style={{
            '--lane-position': lane.position,
            '--lane-duration': lane.duration,
            '--lane-delay': lane.delay,
          }}
        >
          <div className="binary-track">
            <span>{row}</span>
            <span>{row}</span>
          </div>
        </div>
      ))}

      {verticalLanes.map((lane) => (
        <div
          className={`binary-lane binary-lane--vertical binary-lane--${lane.direction}`}
          key={lane.id}
          style={{
            '--lane-position': lane.position,
            '--lane-duration': lane.duration,
            '--lane-delay': lane.delay,
          }}
        >
          <div className="binary-track">
            {[0, 1].map((copy) => (
              <span className="binary-column" key={copy}>
                {column.split('').map((digit, digitIndex) => (
                  <i key={`${copy}-${digitIndex}`}>{digit}</i>
                ))}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BinaryBackdrop;
