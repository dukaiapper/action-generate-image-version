# action-generate-image-version

Get random image version

## Example usage

```yaml
      - name: Generate image version
        id: imageVersion
        uses: nanzm/get-time-action@v1.1
        with:
          timeZone: 8
          format: 'YYYY-MM-DD-HH-mm-ss'
      - name: Usage
        env:
          TIME: "${{ steps.imageVersion.outputs.imageVersion }}"
        run: |
          echo $imageVersion
```

## Inputs

| Parameter  | Required | Info                                                         |
| ---------- | -------- | ------------------------------------------------------------ |
| `timeZone` | `false`  | time Zone  Default: 0                                        |
| `dateFormat`   | `false`  | timestamp format string  Default: 'YY-MM-DD'            |
| `prefix`   | `false`  | prefix format string  Default: ''            |


## Outputs

| Parameter   | Info                                                         |
| ---------- | ------------------------------------------------------------ |
| `imageVersion`   | image version|


