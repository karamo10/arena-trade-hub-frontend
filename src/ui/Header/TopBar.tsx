import Container from '../layout/Container';

export default function TopBar() {
  return (
    <div className="bg-secondary w-full">
      <Container>
        <p className="flex items-center justify-center gap-1 text-xs text-white py-1 capitalize font-medium">
          Free delivery on orders over $50 and coded by!
          <a href="#" className="underline">K4RA</a>
        </p>
      </Container>
    </div>
  );
}
