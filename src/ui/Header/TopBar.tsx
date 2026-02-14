import Container from '../layout/Container';

export default function TopBar() {
  return (
    <div className="bg-gradient-to-l from-[#004e92] to-[#000428] w-full">
      <Container>
        <p className="flex items-center justify-center gap-1 text-xs text-white py-1 capitalize font-medium">
          Free delivery on orders over $50 and coded by!
          <a href="#" className="underline">K4RA</a>
        </p>
      </Container>
    </div>
  );
}
