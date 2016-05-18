# -*- mode: ruby -*-
# vi: set ft=ruby :

# Configuration
APP_HOST = "10.10.10.106"
APP_HOSTNAME = "voter.local"
MOUNT_DIR = "/opt/voter"


Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty64"
  config.vm.hostname = APP_HOSTNAME

  config.ssh.forward_agent = true

  config.vm.network "forwarded_port", guest: 80, host: 8000
  config.vm.network "private_network", ip: APP_HOST

  config.vm.synced_folder ".", "/vagrant", disabled: true
  config.vm.synced_folder ".", MOUNT_DIR

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.name = APP_HOSTNAME
    vb.memory = 1024
    vb.cpus = 1
    vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    vb.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
  end

  config.vm.provision "shell", inline: <<-SHELL

    sudo apt-get install -y libssl-dev openssl libpq-dev

    # Install postgresql

    sudo apt-get install -y postgresql postgresql-contrib

    # sudo su postgres
    # createuser -P voter_user
    # createdb -O voter_user -Eutf8 voter_db

    # Install Python

    wget https://www.python.org/ftp/python/3.5.1/Python-3.5.1.tgz
    tar xzvf Python-3.5.1.tgz
    cd Python-3.5.1
    ./configure
    make
    sudo make install
    sudo pip3 install --upgrade pip
    sudo pip3 install -r /opt/voter/requirements.txt

    # Configure locales

    sudo locale-gen ru_RU.UTF-8
    sudo update-locale
    sudo dpkg-reconfigure locales
    sudo timedatectl set-timezone Europe/Moscow

    SHELL
end
