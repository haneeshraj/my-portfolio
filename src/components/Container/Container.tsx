export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const styles: React.CSSProperties = {
    maxWidth: "140rem",
    margin: "0 auto",
    padding: "0 2rem",
    width: "100%",
    minHeight: "100vh",
  };

  return <div style={styles}>{children}</div>;
}
