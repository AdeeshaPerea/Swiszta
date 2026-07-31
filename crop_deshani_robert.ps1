Add-Type -AssemblyName System.Drawing

function CropFace($srcPath, $outPath, $cropX, $cropY, $cropW, $cropH) {
    $bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
    $rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
    $cropped = New-Object System.Drawing.Bitmap($cropW, $cropH)
    $g = [System.Drawing.Graphics]::FromImage($cropped)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($bmp, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    
    $cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $g.Dispose()
    $cropped.Dispose()
    $bmp.Dispose()
    Write-Host "Successfully cropped face: $outPath"
}

# Deshani face crop (x=330, y=80, w=660, h=660)
CropFace "d:\Swiszta\public\images\team\Deshani gomas.png" "d:\Swiszta\public\images\team\deshani.jpg" 330 80 660 660

# Robert face crop (x=330, y=80, w=660, h=660)
CropFace "d:\Swiszta\public\images\team\robert di giulio.png" "d:\Swiszta\public\images\team\robert.jpg" 330 80 660 660
