type Props = JSX.IntrinsicElements['button']

export const Button: React.VFC<Props> = (props) => (
    <button {...props}>アプリ内のボタンです</button>
)