import Button from 'react-bootstrap/Button';

function button(Props) {
    const variant = Props.variant
    const itemMess = Props.itemMess
    const classButton = Props.classButton
    const onclickpush = Props.onclick
    return (
        <>
            <Button className={classButton} onClick={onclickpush} variant={variant}>{itemMess}</Button>
        </>
    );
}

export default button;