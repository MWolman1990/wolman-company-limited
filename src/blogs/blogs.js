const blogs = [
    
    {
        id: 0,
        title: 'React useEffect Running Twice',
        meta: {
            date: 'October 13th, 2023',
            author: 'Matthew Wolman'
        },
        intro: 'This article will cover the issue of useEffect running twice. If all of your useEffect logic is correct in development, but your useEffect is still running twice, this blog is for you!',
        data: `You're new to React. You love it. You just got done learning your first hook, useState, and now you figured out how useEffect works. You wrote all the code exactly how it should be written. Despite all of this, your state data is appearing twice in your user interface. Me too!.
        
        Why?

        This is happening because of a setting that is built into Create React App. If you look at the render method in your index.js file, you'll see your App Component surrounded by another Component called <React.StrictMode>.

        React implemented this Component to better help developers when it comes to properly using components. In a perfect world, every useEffect call has some form of logic that tells the useEffect to stop running. If your useEffect call does not have some form of logic telling it to stop, it will run twice because of <React.StrictMode>.

        The tricky part is this: this only happens in the development environement. If your useEffect call does not have logic that tells it to stop, it doesn't matter. React designed useEffect calls to NOT need that. So, if you see your state data appearing twice in development environment, understand that it won't happen in production. You will get the correct result if you put your app in production mode.

        This feels like it makes it even worse for beginner developers. And from my perspective, it did. I knew I wrote my code perfectly, and the fact that state was appearing twice meant to me that React itself isn't reliable.

        It's the opposite

        When you go through the process of understanding what is happening here, you become even better at using the useEffect hook. The developers of React are as smart as you think, and they provided a simple, universal workaround for this. Here is the solution:

        Every useEffect call you have can implement an "ignore" clause. The clause looks like this:

        useEffect(() => {
            let ignore = false
            
            if(!ignore) {
                {...code to set state/get data}
            }
            
            return () => {
                ignore = true
            }
        })

        If you understand coding, the concept is simple. The if(!ignore) line is asking if ignore is set to false (is the fact that ignore is false, true)? If ignore is false, the code will run. So, we get one run of the code no matter what now. At the end of our first run, we run another function that makes ignore equal to true. When the if statement checks if ignorse is false, it will get back true this time and the code will be skipped!

        That's pretty much the jist of it
        `
    }
]

export default blogs