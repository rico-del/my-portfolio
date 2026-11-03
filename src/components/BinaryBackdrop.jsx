const binaryPattern = '0100110101101001011010010011010101100101010011010110100100110101'.repeat(5);
const horizontalDirections = ['left', 'right'];
const verticalDirections = ['up', 'down'];

function BinaryBackdrop() {
  return (
    <div className="binary-backdrop" aria-hidden="true">
      {horizontalDirections.map((direction, index) => (
        <div
          className={`binary-lane binary-lane--horizontal binary-lane--${direction}`}
          key={direction}
          style={{ '--lane-index': index }}
        >
          <div className="binary-track">
            <span>{binaryPattern}</span>
            <span>{binaryPattern}</span>
          </div>
        </div>
      ))}

      {verticalDirections.map((direction, index) => (
        <div
          className={`binary-lane binary-lane--vertical binary-lane--${direction}`}
          key={direction}
          style={{ '--lane-index': index }}
        >
          <div className="binary-track">
            {[0, 1].map((copy) => (
              <span className="binary-column" key={copy}>
                {binaryPattern.split('').map((digit, digitIndex) => (
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
