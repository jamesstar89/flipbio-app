import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { className, title, useLink = true } = props;
  const headerClss = className || 'inline-block text-5xl text-white text-left font-semibold mb-8';

  if (useLink) {
    return (
      <div>
        {
          title && (
            <h3 className="text-lg text-[#A9AAC5] text-left leading-snug mb-2">
              {title}
            </h3>
          )
        }
        <h1 className={headerClss}>
          <Link to="/tags" className="flex items-center text-white">
            Flipbio
          </Link>
        </h1>
      </div>
    );
  }

  return (
    <h1 className={headerClss}>
      Flipbio
    </h1>);
}

export default Header;