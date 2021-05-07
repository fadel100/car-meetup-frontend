export default function Showcase() {
  return (
    <div
      className="h-72 bg-center flex flex-col justify-center items-center text-white bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `url(/images/car-club-types.jpg)` }}
    >
      <h1 className="text-4xl font-bold z-10">Welcome To The Party!</h1>
      <h2 className="text-2xl font-semibold z-10">
        Find the latest car meetups
      </h2>
      <div className="absolute inset-0 bg-black opacity-25"></div>
    </div>
  );
}
