export const getImageUrl = (path) => {
  return `${import.meta.env.BASE_URL}${path}`
}

export const handleImageError = (e, label = 'Image') => {
  e.target.onerror = null
  e.target.src = `https://placehold.co/400x400/2d5a4e/ffffff?text=${encodeURIComponent(label)}`
}
