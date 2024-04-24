import Navbar from "react-bootstrap/Nav";
import "../assets/css/root.css";

export default function Root() {
  return (
    <>
      <Navbar className="styling" variant="tabs" defaultActiveKey="/">
        <Navbar.Item>
          <Navbar.Link href="/home">Home</Navbar.Link>
        </Navbar.Item>
        <Navbar.Item>
          <Navbar.Link href="/experience">Experience</Navbar.Link>
        </Navbar.Item>
        <Navbar.Item>
          <Navbar.Link href="/blog">Blog</Navbar.Link>
        </Navbar.Item>
        <Navbar.Item>
          <Navbar.Link href="/projects">Projects</Navbar.Link>
        </Navbar.Item>
        <Navbar.Item>
          <Navbar.Link href="/connect">Contact</Navbar.Link>
        </Navbar.Item>
      </Navbar>
    </>
  );
}
