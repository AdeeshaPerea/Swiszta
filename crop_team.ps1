Add-Type -AssemblyName System.Drawing

$src = "C:\Users\user\.gemini\antigravity-ide\brain\2982c681-edeb-44a3-b3cc-2d487a291abd\media__1784963932271.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($src)

Write-Host "Image Size: $($bmp.Width) x $($bmp.Height)"

function CropImage($x, $y, $w, $h, $outputPath) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $cropped = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($cropped)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($bmp, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $cropped.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $cropped.Dispose()
    Write-Host "Saved: $outputPath"
}

# Percentages / pixel offsets based on 1024x680 resolution
# Card 1: Jason Neville
CropImage 55 270 165 130 "d:\Swiszta\public\images\team\jason.jpg"

# Card 2: Robert Di Giulio
CropImage 238 270 150 130 "d:\Swiszta\public\images\team\robert.jpg"

# Card 3: Deshani Gomas
CropImage 415 270 148 130 "d:\Swiszta\public\images\team\deshani.jpg"

# Card 4: Glen Fernando
CropImage 595 270 160 130 "d:\Swiszta\public\images\team\glen.jpg"

# Card 5: Danny Fernandez
CropImage 772 270 160 130 "d:\Swiszta\public\images\team\danny.jpg"

$bmp.Dispose()
