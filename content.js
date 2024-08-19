// Function to hide chess pieces on chess.com
function hideChessPieces() {
    // Select all elements that represent pieces in any game mode
    const pieces = document.querySelectorAll('.piece');

    // Hide each piece
    pieces.forEach(piece => {
        piece.style.visibility = 'hidden';
    });
}

// Run the function to hide the pieces
hideChessPieces();

// MutationObserver to detect changes in the DOM and hide new pieces if they appear
const observer = new MutationObserver(hideChessPieces);

// Start observing the chessboard element for changes
observer.observe(document.body, { childList: true, subtree: true });
