<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit62001947887ded6d2a6cc10fdc8f772c
{
    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit62001947887ded6d2a6cc10fdc8f772c::$classMap;

        }, null, ClassLoader::class);
    }
}
