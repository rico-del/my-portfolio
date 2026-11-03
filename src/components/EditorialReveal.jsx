import { useInView } from '../hooks/useInView.js';

function EditorialReveal({ as: Element = 'div', className = '', delay = 0, children, ...props }) {
  const { ref, inView } = useInView({ threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

  return (
    <Element
      {...props}
      ref={ref}
      className={`editorial-reveal${inView ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}ms`, ...props.style }}
    >
      {children}
    </Element>
  );
}

export default EditorialReveal;
