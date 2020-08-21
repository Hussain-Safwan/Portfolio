const projects = (state = [
  {
    title: 'TRIN Website',
    description: 'Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.',
    status: 'Ongoing',
    image: 'https://images5.alphacoders.com/374/thumb-1920-374329.jpg',
    link: 'trin-innovation.com',
    source: 'https://github.com'
  },
  {
    title: 'Moner Shastho',
    description: 'Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.',
    status: 'Ongoing',
    image: 'https://images5.alphacoders.com/374/thumb-1920-374329.jpg',
    link: 'trin-innovation.com',
    source: 'https://github.com'
  },
], actions) => {
  switch (actions.type) {
    default:
      return state
  }
}

export default projects