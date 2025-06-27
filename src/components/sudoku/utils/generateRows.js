export default function generateRow() {
    const rows = {}

    for (let i = 0; i < 9; i++) {

        const blocks = []
        i < 3? blocks.push(1, 2, 3) : i < 6? blocks.push(4, 5, 6) : blocks.push(7, 8, 9)

        const firstColumn = i % 3 * 3 + 1
        const cells = [firstColumn, firstColumn+1, firstColumn+2]

        const rowSections = blocks.map((block, index) => {
            return cells.map((cell, index) => {
                return `${block}${cell}`
            })
        })

        rows[i+1] = [].concat(...rowSections)
    }

    return rows
}
