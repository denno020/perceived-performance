export const getCurrentStep = () => Number(window.location.pathname.split('/').filter(Boolean)[0] ?? 0);
