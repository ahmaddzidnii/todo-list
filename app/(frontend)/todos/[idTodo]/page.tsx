const Page = ({ params }: { params: { idTodo: string } }) => {
  return <div>{params.idTodo}</div>;
};

export default Page;
