const projects = (state = [
  {
    title: 'TRIN Website',
    description: 'The official website for a telepsychiatry farm based in Dhaka of the same name, created with Node.js/MongoDB in the backend and an HTML/CSS frontend. Worked mainly as a backend engineer. Visit the site to gain a better insight',
    status: 'Ongoing',
    image: 'https://images5.alphacoders.com/374/thumb-1920-374329.jpg',
    link: 'http://trin-innovation.com',
    source: 'https://github.com'
  },
  {
    title: 'Moner Shastho',
    description: 'Basically an app designed to ensure proper mental health and well being, released under the banner of TRIN. Was incharge of the server side coding, database management and web frontend. Feel free to pay a visit',
    status: 'Ongoing',
    image: 'https://images5.alphacoders.com/374/thumb-1920-374329.jpg',
    link: 'https://bad-blogger.herokuapp.com',
    source: 'https://github.com'
  },
], actions) => {
  switch (actions.type) {
    default:
      return state
  }
}

export default projects