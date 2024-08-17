import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Hàm xử lý sự kiện cuộn trang
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Hàm cuộn trang về đầu
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Sử dụng useEffect để lắng nghe sự kiện cuộn trang
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} style={styles.backToTopButton}>
          ↑
        </button>
      )}
    </div>
  );
};

const styles = {
  backToTopButton: {
    position: 'fixed',
    bottom: '50px',
    right: '50px',
    padding: '10px',
    fontSize: '24px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 1000,
    lineHeight: '22px',
    textAlign: 'center',
  },
};

export default BackToTop;
