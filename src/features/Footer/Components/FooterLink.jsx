/* eslint-disable react/prop-types */
function FooterLink({ children, href }) {
  return (
    <a
      href={href}
      className={
        'block pb-2 text-lg leading-5 transition-transform duration-300 ease-in-out hover:scale-102 hover:text-sky-600 dark:hover:text-sky-400'
      }
    >
      {children}
    </a>
  );
}

export default FooterLink;
