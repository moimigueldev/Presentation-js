export function validateID(id) {
  const container = document.getElementById(id);
  if (container && container !== undefined) {
    return true;
  } else {
    console.error('Presentation requires a valid ID');
    return false;
  }
}
