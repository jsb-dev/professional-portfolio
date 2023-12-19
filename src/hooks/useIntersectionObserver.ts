import { useEffect, RefObject } from 'react';
import { useDispatch } from 'react-redux';
import { setElementAnimated } from '@redux/slices/uiSlice';

const useIntersectionObserver = <T extends HTMLElement>(
  ref: RefObject<T>,
  elementId: string
): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    const current = ref.current;

    if (current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            dispatch(setElementAnimated(elementId));
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(current);

      return () => {
        observer.unobserve(current);
      };
    }
  }, [ref, dispatch, elementId]);
};

export default useIntersectionObserver;
