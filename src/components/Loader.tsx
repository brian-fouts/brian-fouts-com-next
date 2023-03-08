interface LoaderProps {
    show: boolean;
}

export default function Loader(props: LoaderProps) {
  return props.show ? <div className="loader"></div> : null
}