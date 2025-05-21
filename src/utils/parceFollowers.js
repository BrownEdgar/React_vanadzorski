export function parceFollowers(followers) {
  if (followers >= 1000) {
    const f = followers / 1000;
    return (Number.isInteger(f) ? f : f.toFixed(1)) + 'K';
  } else {
    return followers + ' followers';
  }
}
