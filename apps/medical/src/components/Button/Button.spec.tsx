import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from './';

describe('Components/Button', () => {
    it('renders correctly', () => {
        render(<Button />);

        const button = screen.getByText("アプリ内のボタンです");
        expect(button).toBeInTheDocument();
    })
})
