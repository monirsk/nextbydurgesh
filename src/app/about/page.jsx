async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

const AboutPage = async () => {
  await takeTime();
  // throw new Error();
  return <div>This is the about page</div>;
};

export default AboutPage;
