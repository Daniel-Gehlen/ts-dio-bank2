// DButton.tsx
import { Button } from "@chakra-ui/react"
import { ButtonProps } from "@chakra-ui/react";

interface IDButton extends ButtonProps {
    // Add any additional props specific to your DButton component
}

export const DButton = ({ onClick, ...rest }: IDButton) => {
    return (
        <Button
            onClick={onClick}
            colorScheme="teal"
            size="sm"
            width="100%"
            marginTop="5px"
            {...rest}
        >
            {rest.children}
        </Button>
    );
}

export default DButton;
