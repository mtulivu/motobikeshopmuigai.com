document.addEventListener('DOMContentLoaded', function () {
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    const modal = document.getElementById('bikeModal');
    const modalContent = document.getElementById('modalContent');
    const modalTitle = document.getElementById('modalTitle');
    const closeBtn = document.querySelector('.close');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior
            const bikeName = this.dataset.bike;
            modalTitle.textContent = bikeName;
            modalContent.innerHTML = getBikeDetails(bikeName); // Update modal content here
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    function getBikeDetails(bikeName) {
        switch (bikeName) {
            case 'ZT 125 Red':
                return `
                    <strong>Engine:</strong> 125cc<br>
                    <strong>Color:</strong> Red<br>
                    <strong>Price:</strong> $2000
                    <!-- Add more details -->
                `;
            case 'ZT 125 Blue':
                return `
                    <strong>Engine:</strong> 125cc<br>
                    <strong>Color:</strong> Blue<br>
                    <strong>Price:</strong> $2100
                    <!-- Add more details -->
                `;
            case 'YBR 125 Red':
                return `
                    <strong>Engine:</strong> 125cc<br>
                    <strong>Color:</strong> Red<br>
                    <strong>Price:</strong> $1800
                    <!-- Add more details -->
                `;
            case 'YBR 125 Blue':
                return `
                    <strong>Engine:</strong> 125cc<br>
                    <strong>Color:</strong> Blue<br>
                    <strong>Price:</strong> $1850
                    <!-- Add more details -->
                `;
            case 'TVS HLX 125 Flame Red':
                return `
                    <strong>Engine:</strong> 125cc<br>
                    <strong>Color:</strong> Flame Red<br>
                    <strong>Price:</strong> $1900
                    <!-- Add more details -->
                `;
            case 'Lifan LF150-17V':
                return `
                    <strong>Engine:</strong> 150cc<br>
                    <strong>Color:</strong> Varies<br>
                    <strong>Price:</strong> $2500
                    <!-- Add more details -->
                `;
            case 'Yamaha Crux 100cc Black':
                return `
                    <strong>Engine:</strong> 100cc<br>
                    <strong>Color:</strong> Black<br>
                    <strong>Price:</strong> $1500
                    <!-- Add more details -->
                `;
            case 'Yamaha Crux Side 2012':
                return `
                    <strong>Engine:</strong> 100cc<br>
                    <strong>Color:</strong> Black<br>
                    <strong>Price:</strong> $1600
                    <!-- Add more details -->
                `;
            // Add details for more bikes as needed
            default:
                return '';
        }
    }
});
