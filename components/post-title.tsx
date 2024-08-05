export default function PostTitle({ children }) {
  return (
    <h1
      className="text-[30px]"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
