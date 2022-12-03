type Props = {
  onClick: () => void;
};

export const Button = (props: Props) => {
  return <button onClick={props.onClick}>ボタン</button>;
};
