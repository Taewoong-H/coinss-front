import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

type SSRRect = {
  top: number
}
const EmptySSRRect: SSRRect = {
  top: 0,
}

export function useScroll() {
  const [bodyOffset, setBodyOffset] = useState<DOMRect | SSRRect>(
    typeof window === "undefined" || !window.document
      ? EmptySSRRect
      : document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState<number>(bodyOffset.top);

  const listener = () => {
    setBodyOffset(
      typeof window === "undefined" || !window.document
        ? EmptySSRRect
        : document.body.getBoundingClientRect()
    );
    setScrollY(window.pageYOffset);
  };

  const delay = 10;

  useEffect(() => {
    window.addEventListener('scroll', debounce(listener, delay));
    console.log('이벤트 시작');
    return () => {
      console.log('이벤트 종료');
      window.removeEventListener('scroll', debounce(listener, delay));
    }
  }, []);

  return {
    scrollY
  };
}